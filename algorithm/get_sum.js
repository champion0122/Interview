/**
 * 找出给定数组中和为target的数的下标
 * 两数求和问题，普通思维为双重遍历数组。改良方法为map/object做差,若差值已经在object中则返回
 * 空间换时间
 */

const twoSum = function(nums, target){
    const diffs = {}

    for(let i in nums){

        if(diffs[target - nums[i]] != undefined )
            return [diffs[target - nums[i]] , i]

        diffs[nums[i]] = i
    }
}
