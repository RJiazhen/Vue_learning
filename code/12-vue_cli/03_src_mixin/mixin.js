export const mixin1 = {
    methods: {
        showName() {
            alert(this.name);
        }
    },
    mounted() {
        console.log('这是混合的mounted');
    },
};

export const mixin2 = {
    // 在maxin中添加data还能混合数据
    data() {
        return {
            x: 100,
            y: 200
        };
    },
};