
import { Vue, Component } from 'vue-property-decorator'
import { Button } from 'element-ui'
// import { VAlert } from 'vuetify/lib'

@Component
export default class App extends Vue {
  public text = 'main-app'

  protected render (): JSX.Element {
    return (
      <main>
        {/* <VAlert type="success">{this.text}</VAlert> */}
        <Button type="primary">{this.text}</Button>
      </main>
    )
  }
}
