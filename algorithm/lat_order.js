/**
 * 后序遍历，左右根的顺序
 * {val: "",
 *  left: {},
 *  right: {}
 * }
*/

function latOrder(root) {
    if(root === null)
        return
    
    latOrder(root.left)

    latOrder(root.right)

    console.log(`the root value is ${root.val}`)
}