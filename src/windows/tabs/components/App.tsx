
import { Vue, Component } from 'vue-property-decorator'
// import { VAlert } from 'vuetify/lib'

@Component
export default class App extends Vue {
  public text = 'main-app'

  protected render (): JSX.Element {
    return (
      <main>
        {/* <VAlert>{this.text}</VAlert> */}
      </main>
    )
  }
}
