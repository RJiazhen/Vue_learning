module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset',
        //   Element 按需引入追加内容
        ["@babel/preset-env", { "modules": false }]
    ],
    plugins: [
        [
            "component",
            {
                "libraryName": "element-ui",
                "styleLibraryName": "theme-chalk"
            }
        ]
    ]
};
