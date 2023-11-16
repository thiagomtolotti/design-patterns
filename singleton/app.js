class ApplicationState{
    constructor(name){
        if(ApplicationState.instance){
            return ApplicationState.instance
        }
        
        ApplicationState.instance = this

        this.name = name
        this.render()
    }

    render(){
        console.log(this.name)
    }
}

const appState1 = new ApplicationState('appState1')
const appState2 = new ApplicationState('appState2')

appState2.render() // retorna 'appState1'