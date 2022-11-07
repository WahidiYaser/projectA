// //class syntax like this:
// //                                                            question number 1
// // class Employee{
//     // name:string
//     // age:number
//     // salarey:number
//     // constructor(name:string, age:number, salarey:number){
//     //     this.name = name
//     //     this.age = age
//     //     this.salarey = salarey
//     // }
// // }    
// //--------------------------------------- or like this
// class Employee{
// constructor(
//         public name: string,
//         public age: number,
//         public salarey: number
//         ){}
//         details(){
//             return "employee name is "+this.name+" he is "+this.age+
//             " years old and his income is "+this.salarey;
//         }
//         produceNewWorkers(n:number){
//             let workers = [{}]
//             for(let i = 0; i < n; i++){
//                 let age = Math.round(Math.random() * 40) + 20
//                 let salarey = Math.round(Math.random() * 7000) + 2000
//                 workers[i] = new Employee(this.generateName(), age, salarey)
//             }
//             return workers
//         }
//         generateName(){
//             let len = Math.round(Math.random() * 3) + 2
//             let text = ""
//             for(let i = 0; i < len; i++){
//                 let randomChar = Math.round(Math.random() * (122-97)) + 97
//                 text += String.fromCharCode(randomChar)
//             }
//             return text
//         }
// }

// let e1 = new Employee("a", 1, 1)
// // console.log(e1.details())
// //let workers = new Employee().produceNewWorkers(10) -- shows eror but the code is working perfect !!
// let workers = e1.produceNewWorkers(3);
// console.log(workers)

// ------------------------------------ question 2 ---------------------------------
class Employee{
    // workH:number
    // extraWH:number
    // typeOW:number
    // constructor(workH:number, extraWH:number, typeOW:number){
    //     this.workH = workH
    //     this.extraWH = extraWH
    //     this.typeOW = typeOW
    // }
    constructor(
        public workH:number,
        public extraWH:number,
        public typeOW:number     
        ){}

    salary(){
        if(this.typeOW == 1)
        return (this.workH * 40) + (this.extraWH * 50)
        else
        return (this.workH * 70) + (this.extraWH * 87.5)
    }
}

function arrOfWorkers(){
    let leng = Math.round(Math.random() * (5-1)) + 1
    let arr = []
    for(let i = 0; i < leng; i++){
        let wh:number = Math.round(Math.random() * (190-80)) + 80
        let ewh:number = Math.round(Math.random() * (60-30)) + 30
        let tof:number = Math.round(Math.random() * (2-1)) + 1
        arr[i] = new Employee(wh, ewh, tof)
    }
    return arr
}

let arrOfEmployes = arrOfWorkers()
console.log(arrOfEmployes)

function formatArr(arrr:Employee[]){
    let highSalary = arrr[0].salary()
for(let i = 0; i < arrr.length; i++){
    if(highSalary < arrr[i].salary())
    highSalary = arrr[i].salary()

let eSal = arrr[i].salary()
console.log("salary of employee number " + i + " is: " + eSal)

arrr[i].workH = 0
arrr[i].extraWH = 0
arrr[i].typeOW = 0
}
console.log(highSalary)
return arrr
}
console.log(formatArr(arrOfEmployes))