import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import iconFeaturesFast from '../../images/icon-features-fast.svg'
import iconFeaturesDecentralized from '../../images/icon_features_decentralized.svg'
import iconFeaturesEvmCompatible from '../../images/icon_features_evm.svg'
import iconFeaturesCostEffective from '../../images/icon_feature_cost_effective.svg'
import iconFeaturesStable from '../../images/icon_features_stable.svg'
import iconFeaturesGreen from '../../images/icon_features_green.svg'
import iconFeaturesBattle from '../../images/icon_features_battle.svg'
import iconFeaturesTransparent from '../../images/icon_features_transparent.svg'
import iconFeaturesSecure from '../../images/icon_features_secure.svg'
import iconFeaturesDual from '../../images/icon_features_dual.svg'
import iconFeaturesEasy from '../../images/icon_features_easy.svg'
import iconFeaturesInteroperable from '../../images/icon_features_interoperable.svg'
import iconFeaturesPrototyping from '../../images/icon_features_prototyping.svg'
import iconFeaturesInnovation from '../../images/icon_features_innovation.svg'
import iconFeaturesValidation from '../../images/icon_features_validation.svg'
import iconFeaturesLearn from '../../images/icon_features_learn.svg'

const Why = () => {
    return (
        <>
           <Flex as="section" id="why" alignItems="center" flexDirection="column" m={{ sm: "32px 0 0 0", lg: "100px 0 0 0" }} p={{ sm: "32px 0 0 0", lg: "52px 0 0 0" }}>
                <Box as="h2" textStyle="heading2">Why xDai?</Box>
                <Flex as="p" layerStyle="centerCol" textStyle="standardGrey">
                    xDai is a feature-rich, user-centered blockchain. 
                    Level up your blockchain game with speed, 
                    security and real-time scalability.
                </Flex>
            </Flex>

            <Flex flexDirection="column" alignItems="center" p={{ sm: "0 24px", lg: "0" }}>
                <Flex flexDirection="row" flexWrap="wrap" justifyContent="space-between" maxWidth="688px">
                    <Flex layerStyle="iconFeature">
                        <img src={iconFeaturesFast} alt="Fast" />
                        <Text textStyle="iconFeature">Fast</Text>
                    </Flex>
                    <Flex layerStyle="iconFeature">
                        <img src={iconFeaturesDecentralized} alt="Decentralized" />
                        <Text textStyle="iconFeature">Decentralized</Text>
                    </Flex>
                    <Flex layerStyle="iconFeature">
                        <img src={iconFeaturesEvmCompatible} alt="EVM-compatible" />
                        <Text textStyle="iconFeature">EVM-compatible</Text>
                    </Flex> 
                    <Flex layerStyle="iconFeature">
                        <img src={iconFeaturesCostEffective} alt="Cost Effective" />
                        <Text textStyle="iconFeature">Cost Effective</Text>
                    </Flex>                 
                    <Flex layerStyle="iconFeature">
                        <img src={iconFeaturesStable} alt="Stable" />
                        <Text textStyle="iconFeature">Stable</Text>
                    </Flex>
                    <Flex layerStyle="iconFeature">
                        <img src={iconFeaturesGreen} alt="Green PoS" />
                        <Text textStyle="iconFeature">Green PoS</Text>
                    </Flex>
                    <Flex layerStyle="iconFeature">
                        <img src={iconFeaturesBattle} alt="Battle Tested" />
                        <Text textStyle="iconFeature">Battle Tested</Text>
                    </Flex> 
                    <Flex layerStyle="iconFeature">
                        <img src={iconFeaturesTransparent} alt="Transparent" />
                        <Text textStyle="iconFeature">Transparent</Text>
                    </Flex>                 
                    <Flex layerStyle="iconFeature">
                        <img src={iconFeaturesSecure} alt="Secure" />
                        <Text textStyle="iconFeature">Secure</Text>
                    </Flex>
                    <Flex layerStyle="iconFeature">
                        <img src={iconFeaturesDual} alt="Dual Token" />
                        <Text textStyle="iconFeature">Dual Token</Text>
                    </Flex>
                    <Flex layerStyle="iconFeature">
                        <img src={iconFeaturesEasy} alt="Easy to Build" />
                        <Text textStyle="iconFeature">Easy to Buidl</Text>
                    </Flex> 
                    <Flex layerStyle="iconFeature">
                        <img src={iconFeaturesInteroperable} alt="Interoperable" />
                        <Text textStyle="iconFeature">Interoperable</Text>
                    </Flex>
                    <Flex layerStyle="iconFeature">
                        <img src={iconFeaturesPrototyping} alt="Prototyping" />
                        <Text textStyle="iconFeature">Prototyping</Text>
                    </Flex>
                    <Flex layerStyle="iconFeature">
                        <img src={iconFeaturesInnovation} alt="Innovation" />
                        <Text textStyle="iconFeature">Innovation</Text>
                    </Flex>
                    <Flex layerStyle="iconFeature">
                        <img src={iconFeaturesValidation} alt="Validation" />
                        <Text textStyle="iconFeature">Validation</Text>
                    </Flex> 
                    <Flex layerStyle="iconFeature">
                        <img src={iconFeaturesLearn} alt="Learn More" />
                        <Text textStyle="iconFeature">Learn More</Text>
                    </Flex>                 
                </Flex>                         
            </Flex>
        </>
    )
}

export default Why