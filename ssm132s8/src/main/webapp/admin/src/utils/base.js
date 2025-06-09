const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm132s8/",
            name: "ssm132s8",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm132s8/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "航帆学院网站"
        } 
    }
}
export default base
