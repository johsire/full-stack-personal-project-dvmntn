
// let comments = [];

// module.exports = {
//  createComment: ( req, res ) => {
//   const id = uuidv4();
//   const { comment, product_id } = req.body;
//   // req.body.comment = comment
//   // req.body.product_id = product_id

//   comments.push({ id, comment, product_id });
//   res.status(200).json({
//     data: comments,
//   });

// },

// // UPDATE
// updateComment: ( req, res ) => {
//   // make request to axios 
//   const { comment, comment_id, product_id } = req.body;
//   console.log(req.body, 'THIS IS WHAT IS COMING THROUHG');

//   const commentToUpdate = comments.filter((c) => c.id == comment_id)
//   const test = commentToUpdate;
//   console.log('test', test);
//   const index = comments.indexOf(commentToUpdate[0]);
//   if (index !== -1) comments[index] = {
//     id: comment_id,
//     comment,
//     product_id : product_id,
//   }
//   //return comments with updated comment
//   res.status(200).send(comments)
// },

// // DELETE
// delete: ( req, res ) => {
//   const {comment_id } = req.body;
//   let deleteId = comment_id;
//   commentId = comments.filter(item => item.id === deleteId);
//   comments.splice(commentId, 1);
//   res.status(200).send(comments);
//   }
// }
