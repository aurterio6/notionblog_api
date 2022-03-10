import DocumentHead from '../components/document-head'
import ExtLink from '../components/ext-link'
import styles from '../styles/page.module.css'

const RenderPage = () => (
  <div className={styles.container}>
    <DocumentHead />
    <div>
      <p>
        頑張って生きているけれどSNSで発言するほどでもないのでサイトを作ってみました。
        <br />
        本当はエンジニアに憧れがあるので趣味の一環です。ちょっとずつ作ってみます。
        <br />
        <br />
        一目瞭然ですが、
        <ExtLink href="https://github.com/otoyo/easy-notion-blog">
          easy-notion-blog
        </ExtLink>
        を使わせてもらってます。 <br />
        今は初めてコードに触るので、いつか...
        <br />
        <br />
        ページがインデックスされないのでいくつか記事を
        <br />
        <ExtLink href="https://www.pappardelle-nono.tk/blog/kentikushi">
          建築士の記事
        </ExtLink>
        <br />
        <ExtLink href="https://www.pappardelle-nono.tk/blog/revice">
          できることの確認
        </ExtLink>
      </p>
    </div>
  </div>
)

export default RenderPage
