export class Course {
    constructor(_id = undefined, 
        name = "", 
        duration = 0, 
        dateStart = "", 
        dateFinal = "", 
        campus = "", 
        workingShift = "", 
        description = "", 
        Image = "") {
            this._id = _id;
            this.name = name;
            this.duration = duration;
            this.dateStart = dateStart;
            this.dateFinal = dateFinal;
            this.campus = campus;
            this.workingShift = workingShift;
            this.description = description;
            this.Image = Image;
        }

    _id: undefined;
    name: string;
    duration: number;
    dateStart: string;
    dateFinal: string;
    campus: string;
    workingShift: string;
    description: string;
    Image: string;
}
