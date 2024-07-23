import { v4 as uuidv4 } from 'uuid';

export class Pet{
    constructor(name, type, breed, color, age, lastSeenLocation, dateLost, status, description, ownerContact, photoURL){
        this.id = uuidv4();
        this.name = name;
        this.type = type;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.lastSeenLocation = lastSeenLocation;
        this.dateLost = dateLost;
        this.status = status;
        this.desdescription =description;
        this.ownerContact =ownerContact
        this.photoURL = photoURL;
    }
}


