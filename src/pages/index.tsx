import DocumentHead from '../components/document-head'
import ExtLink from '../components/ext-link'
import styles from '../styles/page.module.css'

const RenderPage = () => (
  <div className={styles.container}>
    <DocumentHead />
    <div>
      <p>
        頑張って生きているけれどSNSで発言するほどでもないのでサイトを作ってみました。本当はエンジニアに憧れがあるので趣味の一環です。ちょっとずつ作ってみます。今は初めてコードに触るので、いつかいい感じにしたいです。きっかけとしては新しいアプリが好きなので色々試していたところnotionに出会い、色々便利な使い方を調べているうちにblogもできるらしいというのをみて、色々始めました。このサイトの内容としては、私のライフログとして、その時々の関心ごとを記事にしていきます。2022年の今はプログラミングやポイ活などに関心があるのでそういった記事が増えると思います。
      </p>
      <p>
        私のバックグラウンドとしては、建築の大学を出ていますが無関係の事務仕事をしています。無料の趣味として2021年からプログラミングを初めて、色々楽しんでいますが、Google検索でやりたい動作をひたすらコピペしているので、全く体系だった知識はありません。基本的には最初に触ったpythonで機械学習だったり、簡単なボードゲームを仲間内で遊ぶために作ったり、今はブログだったりを作っています。githubの使い方はいまいちわからないのと出しちゃいけない情報を出してないか不安なので基本非公開にしています。
      </p>
      <p>
        ポイ活に関しては、ポイントサイトなどを使ったポイ活のためにアクションをするというよりは、クレジットカードやプリペイドカードを集めるのが好きなのでその時々の高還元率を考えたりしていきます。キャンペーンも自然と知ったら参加しますが、参加し損ねたキャンペーンとか見つけると悔しいのであまり情報収集はしていません。
      </p>
      <p>
        その他今後の計画としては一人旅などをしていきたいのでその記録だったりつけていきたいです。ちなみに直近の悩みとしてはブログのトップページしかgoogle様に見つけていただいていないのでそこをどうにかしたいです。この自己紹介もその対策として長文あったら改善するかな、として書いています。その他、アフィリエイトは世の中をよくしているとはとても思えないので今のところやらないつもりです。おすすめの商品のリンクを貼ったとしてもそれはリンクでしかないはずです。
      </p>
      <p>いくつかブログを試しているところなので以下にリンク</p>
      <p>
        <ExtLink href="https://ameblo.jp/pelissier">[アメブロ]</ExtLink>
        <br></br>
        <ExtLink href="https://www.pappardelle-nono.tk/">
          [vercelを使ったnotionブログ]
        </ExtLink>
        <br></br>
        <ExtLink href="https://flasknotionblog.herokuapp.com/">
          [herokuを使ったnotionブログ]
        </ExtLink>
        <br></br>
        <ExtLink href="https://ilmiolifelog.herokuapp.com/">
          [wordpressを使ったnotionからコピペしているブログ]
        </ExtLink>
      </p>
    </div>
  </div>
)

export default RenderPage
