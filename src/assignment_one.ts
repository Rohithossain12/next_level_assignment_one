{


    const formatString = (input: string, toUpper: boolean = true): string =>
        toUpper ? input.toUpperCase() : input.toLowerCase();


    console.log(formatString("Hello"));
    console.log(formatString("Hello", true));
    console.log(formatString("Hello", false));




    const filterByRating = (items: { title: string; rating: number }[]): { title: string; rating: number }[] =>
        items.filter(item => item.rating >= 4);

    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 },
        { title: "Book D", rating: 3.5 },
        { title: "Book E", rating: 4.0 },
    ];


    console.log(filterByRating(books));


    

    const concatenateArrays = <T>(...arrays: T[][]): T[] => {
        let result: T[] = [];
        for (const arr of arrays) {
            result = result.concat(arr);
        }
        return result;
    };


    console.log(concatenateArrays(["Jhankar vai", 'Mezba Vai', "Mir Vai", "Tonmoy Vai"]));
    console.log(concatenateArrays([1, 2], [3, 4], [5]));
    console.log(concatenateArrays([true, false], [true]));





    class Vehicle {
        private make: string;
        private year: number;


        constructor(make: string, year: number) {
            this.make = make
            this.year = year
        }
        getInfo(): string {
            return `Make ${this.make} Year ${this.year}`
        }
    }

    class Car extends Vehicle {
        private model: string


        constructor(make: string, year: number, model: string) {
            super(make, year)
            this.model = model
        }

        getModel() {
            return `Model ${this.model}`
        }
    }


    const myCar = new Car("BMW", 2025, "BMW X1 sDrive18i")
    console.log(myCar.getInfo());
    console.log(myCar.getModel());


}