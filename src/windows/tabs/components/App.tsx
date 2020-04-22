
import { Vue, Component } from 'vue-property-decorator'
import { VAlert, VBtn } from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'

@Component
export default class App extends Vue {
  public text = 'main-app'

  protected render (): JSX.Element {
    return (
      <main>
        <VAlert>{this.text}</VAlert>
        <VBtn small color="primary">{this.text}</VBtn>
      </main>
    )
  }
}
