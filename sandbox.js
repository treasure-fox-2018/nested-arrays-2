'use strict'

let roster = [
    ['Number', 'Name', 'Position', 'Points per Game'],
    [12, 'Joe Schmo', 'Center', [14, 32, 7, 0, 23]],
    [9, 'Ms. Buckets', 'Point Guard', [19, 0, 11, 22, 0]],
    [31, 'Harvey Kay', 'Shooting Guard', [0, 30, 16, 0, 25]],
    [7, 'Sally Talls', 'Power Forward ', [18, 29, 26, 31, 19]],
    [22, 'MK DiBoux ', 'Small Forward ', [11, 0, 23, 17, 0]]
]

// [[roster[0][0], roster[1][0]], [roster[0][1], roster[1][1]],...

function convert_roster_format() {
    // your convert code here
   let rosterArr = []
    
    // for (let i = 1; i < roster.length; i++) {
    //     let rosterObj = {} 
    //     for (let j = 0; j < roster[i].length; j++) {
    //         rosterObj[roster[0][0]] = roster[i][0]
    //         rosterObj[roster[0][1]] = roster[i][1]
    //     //debugger    
    //     }
    //     rosterArr.push(rosterObj)
    // }
    for (var i in roster) {
        let rosterObj = {}
        
        for (var j in roster[i]) {
            rosterObj[roster[0][j]] = roster[i][j]
            
        }    
        // console.log(roster[i])
        rosterArr.push(rosterObj)
    }
    rosterArr.pop(rosterArr[0])
    return rosterArr
}

// let object_roster = convert_roster_format(roster)
// console.log(object_roster[2])

// // => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }

// console.log(object_roster[0]['Name'] == 'Joe Schmo') // outputs true

// module.exports = {
//     convert_roster_format
// }

console.log(convert_roster_format())

// cara nge debugger lewat chrome
// 1. node --inspect-brk .\sandbox.com
// 2. masuk ke chrome
// 3. ketik chrome://inspect/
// 4. f9 untuk persatuan
// 5. f8 untuk total nya