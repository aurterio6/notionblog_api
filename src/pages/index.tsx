import Header from '../components/header'
import ExtLink from '../components/ext-link'
import sharedStyles from '../styles/shared.module.css'

const RenderPage = () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <div className="explanation">
        <p>
          頑張って生きているけれどSNSで発言するほどでもないのでサイトを作ってみました。
          本当はエンジニアに憧れがあるので趣味の一環です。ちょっとずつ作ってみます。
        </p>

        <p>
          一目瞭然ですが、
          <ExtLink href="https://github.com/otoyo/easy-notion-blog">
            easy-notion-blog
          </ExtLink>
          を使わせてもらってます。 今は初めてコードに触るので、いつか...
        </p>
      </div>
    </div>
  </>
)

export default RenderPage
