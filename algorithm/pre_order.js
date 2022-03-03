/**
 * 先序遍历，根左右的顺序
 * {val: "",
 *  left: {},
 *  right: {}
 * }
*/

function preOrder(root){
    if(root === null)
        return
    
    console.log(`the root value is ${root.val}`)

    preOrder(root.left)
    
    preOrder(root.right)
}