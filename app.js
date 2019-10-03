//Code defining variables
const org1_depts=[
    {
        name:'accounting',
        children: [
            {name: 'accounting payable', children: []},
            {name: 'accounting recievable', children: []},
            ],
        },
        {
        name: 'finance',
        children: [],
        }
    ];

const org2_depts = [
    {
        name: 'accounting',
        children: [
            {name: 'accounting payable', children: []},
            {
                name: 'accounting recievable',
            children: [{ name: 'cash',children: []}, {name: 'check', children:[] }],
        },
        ],
    },
    {
        name: 'finance',
        children: [{name: 'investment', children: []}],
    },
    ];

//defining the list tags as variables
const start_tag='<ol>'
const end_tag='<ol>'
const start_li='<li>'
const end_li='<li>'
const start_ul='<ul>'
const end_ul='<ul>'
//doesn't do anything right now
//JSON.stringify(org1_depts);


// displays the names and children for org 1
//(change objects in to strings?)
var output=start_tag

    for (const user of org1_depts) {
        output += user.name
        output += start_ul + user.name.children
}
//The output for dept 1
output += end_tag
const outputDiv=document.getElementById('output')
outputDiv.innerHTML=output


// dept 2
var output2=start_tag
for (const user of org2_depts) {
    output2 += user.name
        output2 += start_ul + user.name.children
}

//The output for dept 2
output2 += end_tag
const output2Div=document.getElementById('output2')
output2Div.innerHTML=output2