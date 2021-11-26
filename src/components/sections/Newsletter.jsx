import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import imgSocialDiscord from '../../images/icon_social_discord.svg'
import imgSocialTwitter from '../../images/icon_social_twitter.svg'
import imgSocialTelegram from '../../images/icon_social_telegram.svg'

const Newsletter = () => {
    return (
        <Flex as="section" id="newsletter" alignItems="center" flexDirection="column"  m="16px 0 0 0" p={{ sm: "32px 0 32px 0", lg: "88px 0 88px 0"}}>
            <Box as="h2" textStyle="heading2" mb={{ sm: "16px", lg: "68px" }}>Newsletter</Box>
            <Flex w={{ sm: "300px", lg: "480px" }}>
                <iframe src="https://xdai.substack.com/embed" style={{ "border": "1px solid #EEE", "background": "white", "width" : "100%" }} frameBorder="0" scrolling="no" title="xDaiSubstackForm"></iframe>
            </Flex>
            <Flex alignItems="center" flexDirection="row" justifyContent="space-between" mt={{ sm: "32px", lg: "48px" }} w="120px">
                <a href="https://discord.gg/mPJ9zkq" target="_blank" rel="noreferrer"><img src={ imgSocialDiscord } alt="Discord" /></a>
                <a href="https://twitter.com/xdaichain" target="_blank" rel="noreferrer"><img src={ imgSocialTwitter } alt="Twitter" /></a>
                <a href="https://t.me/xdaistable" target="_blank" rel="noreferrer"><img src={ imgSocialTelegram } alt="Telegram" /></a>
            </Flex>
        </Flex>
    )
}

export default Newsletter