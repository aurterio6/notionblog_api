import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share'

import * as gtag from '../lib/gtag'
import sharedStyles from '../styles/shared.module.css'

const SocialButtons = ({ title = '', url, id = null }) => {
  return (
    <>
      <ul className={sharedStyles.socialButtons}>
        <li className={sharedStyles.socialButtonsItem}>
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
        <li className={sharedStyles.socialButtonsItem}>
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
