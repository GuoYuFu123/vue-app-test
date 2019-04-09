<template>
    <div>
        <my-tree :list='list'></my-tree>
    </div>
</template>

<script>
import MyTree from './mytree';
export default {
    name: '',
    data() {
        return {
            list: [
                {
                    tit: '1级1',
                    list: [
                        { tit: '2级1' },
                        {
                            tit: '2级1',
                            list: [
                                {
                                    tit: '3级1',
                                    list: [{ tit: '4级1' }]
                                }
                            ]
                        }
                    ]
                },
                { tit: '1级2' },
                {
                    tit: '1级3',
                    list: [{ tit: '2级3-1' }, { tit: '2级3-2' }]
                }
            ]
        }
    },
    components: {
        MyTree
    }
    
}
</script>

<style>
</style>
