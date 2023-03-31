import { Request, Response } from "express";
import { personajeModel } from "../models/personaje.entity";

export const retrieve = async (req:Request, res: Response)=>{
    
    const personajes = await personajeModel.find();
    res.json(personajes);
}

export const retrieveById = async (req:Request, res: Response)=>{
    const{ id} = req.params;
    const personaje = await personajeModel.findById( id);

    res.json(personaje);
}

export const create =  async (req:Request, res: Response)=>{
    const {nombre, alte, role} = req.body;
    const personaje = await personajeModel.create({
        nombre,
        alte,
        role
    });

   const createpersonaje = await personaje.save();

    res.json(createpersonaje                                                                                                                                    );
}

export const update = async (req:Request, res: Response)=>{
    const {id} = req.params;
    const { nombre, alte, role} = req.body;

    const newDataPersonaje = {
        nombre,
        alte,
        role
    };

    const updatedPersonaje = await personajeModel.findByIdAndUpdate(id, newDataPersonaje);

    res.json(updatedPersonaje);


}

export const remove = async (req:Request, res: Response)=>{
    const {id} = req.params;
    const removedPersonaje = await personajeModel.findByIdAndRemove(id);

    res.json(removedPersonaje);

}


