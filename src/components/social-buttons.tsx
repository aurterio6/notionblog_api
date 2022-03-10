import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share'

import * as gtag from '../lib/gtag'
import styles from '../styles/social-buttons.module.css'

const SocialButtons = ({ title = '', url, id = null }) => {
  return (
    <>
      <ul className={styles.socialButtons}>
        <li>
          <TwitterShareButton
            url={url}
            title={title}
            beforeOnClick={() =>
              gtag.share({
                method: 'twitter',
                contentType: 'article',
                itemId: id,
              })
            }
          >
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
        </li>
        <li>
          <FacebookShareButton
            url={url}
            beforeOnClick={() =>
              gtag.share({
                method: 'facebook',
                contentType: 'article',
                itemId: id,
              })
            }
          >
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
        </li>
      </ul>
    </>
  )
}

export default SocialButtons
