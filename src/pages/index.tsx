import Header from '../components/header'
import ExtLink from '../components/ext-link'
import sharedStyles from '../styles/shared.module.css'

const RenderPage = () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <h1>私のライフログ</h1>
      <div className="explanation">
        <p>
          頑張って生きているけれどSNSで発言するほどでもないのでサイトを作ってみました。
          本当はエンジニアに憧れがあるので趣味の一環です。ちょっとずつ作ってみます。
        </p>

        <p>
          一目瞭然ですが、notion-blogを使ってます。画像はかっこいいので残しています。
          今は初めて触るので、いらないところを削除するだけ...いつか...
        </p>
      </div>
    </div>
  </>
)

export default RenderPage
