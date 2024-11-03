import express from "express";
import { doc, DocumentData, DocumentReference, getDoc, setDoc } from "firebase/firestore";
import { db } from "../util/db";
import { Item } from "../models/item";

export let router = express.Router();

router.post("/", async (req, res, next) => {
    const body = req.body;
    const userID = body.userID;
    const items = body.items;

    if (items == null || items.length < 1) {
        res.status(404).json({
            "error": "No Items Provided",
        });
        return;
    }

    const docRef = doc(db, "users", userID);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        res.status(404).json({
            "error": "No User Found",
        });
        return;
    }

    let orderItems: DocumentReference<DocumentData, DocumentData>[] = [];
    (items as string[]).forEach(item => orderItems.push(doc(db, "items", item)));

    docSnap.data()["items"].forEach((item: any) => {
        let offset = item["_key"]["path"]["offset"];
        let len = item["_key"]["path"]["len"];
        let itemPath = "";
        for (let i = offset; i < len + offset; i++) {
            itemPath += item["_key"]["path"]["segments"][i] + "/";
        }

        orderItems.push(doc(db, itemPath));
    });

    await setDoc(docRef, {
        items: orderItems
    }, {merge: true});

    res.send("");

});