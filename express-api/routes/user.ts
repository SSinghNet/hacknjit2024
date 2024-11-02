import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import express from "express";
import { db } from "../util/db";
import { instanceOfUser, User } from "../models/user";

export let router = express.Router();

router.get("/:id", async (req, res, next) => {
    const docRef = doc(db, "users", req.params.id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        res.json(docSnap.data());
        return;
    }

    res.status(404).json({
        "error": "No User Found",
    });
});

router.get("/:id/items", async (req, res, next) => {
    const docRef = doc(db, "users", req.params.id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        res.json(docSnap.data()["items"]);
        return;
    }

    res.status(404).json({
        "error": "No User Found",
    });
});

router.post("/", async (req, res, next) => {
    const colRef = collection(db, "users");
    const body = req.body as User;

    if (!instanceOfUser(body)) {
        res.status(500).json({
            "error": "Invalid User Schema",
        });
        return;
    }

    await setDoc(
        doc(colRef),
        { ...body, items: []},
    );

    res.json(req.body);
});