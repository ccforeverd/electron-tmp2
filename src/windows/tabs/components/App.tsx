
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  public text = 'main-app'

  protected render (): JSX.Element {
    return (
      <main>
      </main>
    )
  }
}
