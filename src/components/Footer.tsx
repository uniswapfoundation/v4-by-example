import React from "react"
import styles from "./Footer.module.css"
import sce from "./sce.png"
import youTube from "./youtube.png"
import telegram from "./telegram.png"
import discord from "./discord.png"

function Footer() {
  return (
    <div className={styles.component}>
      <div className={styles.row}>
        <span>🦄&nbsp;</span>
        <a href="https://uniswapfoundation.org" target="__blank">
          Uniswap Foundation
        </a>
      </div>
      {/* <div className={styles.social}>
        <div className={styles.row}>
          <img src={discord} alt="discord" className={styles.discord} />
          <a href="https://discord.gg/bt8FK2wkcW" target="__blank">
            Discord
          </a>
        </div>
        <div className={styles.row}>
          <img src={telegram} alt="telegram" className={styles.telegram} />
          <a href="https://t.me/smartcontractprogrammer" target="__blank">
            Telegram
          </a>
        </div>
        <div className={styles.row}>
          <img src={youTube} alt="youtube" className={styles.youTube} />
          <a
            href="https://www.youtube.com/channel/UCJWh7F3AFyQ_x01VKzr9eyA"
            target="__blank"
          >
            YouTube
          </a>
        </div>
      </div> */}
      <div className={styles.row}>
        <a href="https://github.com/uniswapfoundation/v4-by-example" target="__blank">
          source
        </a>
        <div className={styles.bar}>|</div>
        <a
          href="https://github.com/uniswapfoundation/v4-by-example/blob/gh-pages/LICENSE"
          target="__blank"
        >
          license
        </a>
      </div>
      <div className={styles.row}>
        (fork of&nbsp;
        <a href="https://solidity-by-example.org" target="__blank">
          solidity-by-example)
        </a>
      </div>
    </div>
  )
}

export default Footer
