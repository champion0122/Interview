/**
 * 中序遍历，左根右的顺序
 * {val: "",
 *  left: {},
 *  right: {}
 * }
*/

function midOrder(root) {
    if(root === null)
        return 
    
    midOrder(root.left)

    console.log(`the root value is ${root.val}`)
    
    midOrder(root.right)
}