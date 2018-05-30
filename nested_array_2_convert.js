'use strict'

let roster = [
  ['Number', 'Name', 'Position', 'Points per Game'],
  [12, 'Joe Schmo', 'Center', [14, 32, 7, 0, 23] ],
  [9, 'Ms. Buckets', 'Point Guard', [19, 0, 11, 22, 0] ],
  [31, 'Harvey Kay', 'Shooting Guard', [0, 30, 16, 0, 25] ],
  [7, 'Sally Talls', 'Power Forward ', [18, 29, 26, 31, 19] ],
  [22, 'MK DiBoux ', 'Small Forward ', [11, 0, 23, 17, 0] ]
]

// [[roster[0][0], roster[1][0]], [roster[0][1], roster[1][1]],...

function convert_roster_format (nestedArray) {
  let convertArr = []
  for(var a = 1; a <= nestedArray.length-1; a++) {
    var obj = {}
    for (var b = 0; b <= nestedArray[a].length-1; b++) {
      obj[nestedArray[0][b]] = nestedArray[a][b]
    }
    convertArr.push(obj)
  }
  return convertArr
}

let object_roster = convert_roster_format(roster)
console.log(object_roster[2])

// => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }

console.log(object_roster[0]['Name'] == 'Joe Schmo') // outputs true

module.exports = {
  convert_roster_format
}

/*
obj[nestedArray[0][0]] = nestedArray[a][0]
    obj[nestedArray[0][1]] = nestedArray[a][1]
    obj[nestedArray[0][2]] = nestedArray[a][2]
    obj[nestedArray[0][3]] = nestedArray[a][3]
*/
