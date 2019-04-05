export class Repository {

    private id: number;
    private name: string;
    private description: string;

    constructor(id: number, name: string, description: string) {
      this.id = id;
      this.name = name;
      this.description = description;
    }

    public getId = () =>  {
      return this.id;
    }

    public getName = () => {
      return this.name;
    }

    public getDescription = () => {
      return this.description;
    }
}
