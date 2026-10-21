// use("AiMl")




// db.students.aggregate([
//     {
//         $match:{
//             "course":"BCA",
//             "attendance":{$gt:85}
//         }
//     }
// ])

use("AiMl")
// db.students.aggregate([
//     {$match:{ "course": "CSE" }}
// 
// 
// ])
// db.students.aggregate([
//     {$match:{ "attendance": {$gt:85} }}
// 
// ])
// db.students.aggregate([
//     {$match:{ "course":"BCA",
//         "attendance": {$gt:80} }}
// 
// ])
// db.students.aggregate([
//     {$match:
//         { "marks.math": {$gt:80} }}

// ])

// db.students.aggregate([
//     {$group: {
//       _id: "$course",
//       NumberOfStudents: {
//         $sum:1
//       }
//     }}
// ])

// db.students.aggregate([
//     {
//         $group: {
//           _id: "$course",
//         AvgAttendence: {
//             $avg:"$attendance"
//           }
//         }
//     }
// ])

// db.students.aggregate([
//     {
//         $group: {
//           _id: "$course",
//           mathMarks: {
//             $max:"$marks.math",
            
//           }
//         }
//     }
// ])

// db.students.aggregate([
//     {
//         $group: {
//           _id: "$course",
//           hello: {
//             $avg:"$marks.math" 
//           }
//         }
//     }
// ])

// db.students.aggregate([
//     {
//         $group: {
//           _id: "$city",
//           totalStudents: {
//             $sum: 1
//           }
//         }
//     }
// ])

// db.students.aggregate([
//     {
//         $match:{
//             "course":"CSE"
//         }

//     },

//     {
//         $group: {
//           _id: null,
//             avgAttendeance:{
//                 // $sum: 1
//                 $avg: "$attendance"
//             }
//           }
//         }
    
// ])

// db.students.aggregate([
//     {
//         $match: {
//             "course": "BCA"
//         }
//     },
//     {
//         $group: {
//           _id: null,
//           MaxMathMarks: {
//             $max: "$marks.math"    //$ is used to access the value of the field marks.math for each document in the group. if we don't use $ then it will be treated as a string and not as a field name.
//           }
//         }
//     }
// ])

// db.students.aggregate([
//     {
//         $match: {
//             "course": "CSE",
//             "attendance": {$gt: 80}
//         }
//     },
//     {
//         $group: {
//             _id: null,
//             NumberOfStudents: {
//                 $sum: 1
//             }
//         }
//     }
// ])

db.students.aggregate([
  {
    $project:{
      name:1,
      totalMarks:{
        $add:["$marks.math","$marks.dbms","$marks.web"]
      }
    }
  },
  {
    $sort:{
      "totalMarks":-1 // this will sort the data in decending order.
    }
  }
])
// how to create an index ,how to find it 
// text index