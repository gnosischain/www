import { Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Seo from '../components/Seo'

const NotFoundPage = () => (
  <>
    <Seo title="404: Not found" />
    <Heading>404: Not Found</Heading>
    <Text fontSize="xl" my={5}>
      File Not Found
    </Text>
  </>
)

export default NotFoundPage
