function processCow(name,type,date){

let start=new Date(date)
let today=new Date()

let diff=Math.floor((today-start)/86400000)

type = type.trim().toLowerCase()

if(type==="pregnancy"){

let remain=GESTATION-diff
if(remain<0) remain=0

let done=convert(diff)
let pend=convert(remain)

let delivery=new Date(start.getTime()+GESTATION*86400000)

document.getElementById("pregnancy").innerHTML += `

<div class="card">

<b>${name}</b><br>

Completed: ${done.m}M ${done.d}D<br>

Remaining: ${pend.m}M ${pend.d}D<br>

Delivery: ${delivery.toDateString()}

<button class="delete"
onclick="deleteCow('${name}','Pregnancy','${date}')">
Delete
</button>

</div>

`

}

if(type==="heat"){

let remain=HEAT-diff
if(remain<0) remain=0

let next=new Date(start.getTime()+HEAT*86400000)

document.getElementById("heat").innerHTML += `

<div class="card">

<b>${name}</b><br>

Days: ${diff}<br>

Next Heat In: ${remain} Days<br>

Next Heat: ${next.toDateString()}

<button class="delete"
onclick="deleteCow('${name}','Heat','${date}')">
Delete
</button>

</div>

`

}

}
