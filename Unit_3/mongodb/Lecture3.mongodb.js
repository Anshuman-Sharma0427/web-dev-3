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

db.students.aggregate([
    {
        $match:{
            "course":"CSE"
        }

    },

    {
        $group: {
          _id: null,
            avgAttendeance:{
                // $sum: 1
                $avg: "$attendance"
            }
          }
        }
    
])