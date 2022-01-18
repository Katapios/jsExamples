//incoming objects

const boys = [
    {name: "Vasya", position: "office worker"},
    {name: "Vova", position: "office worker"},
    {name: "Sasha", position: "office worker"},
    {name: "Nikita", position: "office worker"}
];

const proggers = [
    {name: "Petya", position: "progger"},
    {name: "Kirill", position: "progger"},
    {name: "Vitalik", position: "progger"}
];

//merge incoming objects
boys.push(...proggers);

//create new copy of the object
const boy = {...boys}

//add function
function addBoy(name, pos = "office worker"){
    const num = Object.keys(boy).length;
    const el = {name: name, position: pos};
    boy[num] = el
}

//dell function
function delBoy(name){
    let index = Object.values(boy).findIndex(item => item.name == name)
    delete boy[index]
}

//view function
function whoIsThisBoy(name = null){
    Object.keys(boy).forEach(
        k => ((name == null)) ? 
        console.log(boy[k].name,":",boy[k].position) : 
        (name == boy[k].name) ? 
        console.log(boy[k].name,":",boy[k].position) : 
        "")
}

//edit function (make a progger)
function makeAProgger(name){
    let findName =  Object.values(boy).filter((el) => el.name == name);
    findName[0].position = "progger"
}

//edit function (make a office worker)
function makeOfficeWorker(name){
    let findName =  Object.values(boy).filter((el) => el.name == name);
    findName[0].position = "office worker"
}

//find position function
function findOnly(pos){
    let findName =  Object.values(boy).filter((el) => el.position == pos);
    console.log(findName)
}

addBoy("Alesha");
delBoy("Petya")
makeAProgger("Vova");
makeOfficeWorker("Vitalik")
whoIsThisBoy();
findOnly("progger")
//console.log(boys)