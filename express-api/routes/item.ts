import express from 'express';
import { db } from '../util/db';
import { collection, doc, DocumentData, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { instanceOfItem, Item } from '../models/item';

export let router = express.Router();

router.get("/", async (req, res, next) => {
    const colRef = collection(db, "items");
    const docsSnap = await getDocs(colRef);
    let docs: { id: string; }[] = [];
    docsSnap.forEach(doc => {
        docs.push({ ...doc.data(), id: doc.id });
    })
    res.json(docs);
});

router.get("/:id", async (req, res, next) => {
    const docRef = doc(db, "items", req.params.id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        res.json({ ...docSnap.data(), id: docSnap.id });
        return;
    }

    res.status(404).json({
        "error": "No Item Found",
    });
});

router.post("/", async (req, res, next) => {
    const colRef = collection(db, "items");
    const body = req.body as Item;

    if (!instanceOfItem(body)) {
        res.status(500).json({
            "error": "Invalid Item Schema",
        });
        return;
    }

    await setDoc(
        doc(colRef),
        body,
    );

    res.json(req.body);
});


