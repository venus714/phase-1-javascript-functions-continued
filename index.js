// code your solution here

function saturdayFun(activity="roller-skate") {
    return(`This Saturday, I want to ${activity}!`);
}
function mondayWork(words="go to the office"){
    return(`This Monday, I will ${words}.`)

}
function wrapAdjective(asteri='*'){
    return function wrapAdjective(desc="a hard worker"){
     return(`You are ${asteri}${desc}${asteri}!`)
}}
