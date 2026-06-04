type A = null
type B = undefined

type C = A extends B ? string : number

type RichPeople = {
    car:string,
    bike:string,
    cng:string
}



type checkMyVhicle<T> = T extends keyof RichPeople ? true : false

type hasBike = checkMyVhicle<"bike">



