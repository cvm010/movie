import { Avatar, Button, Container, Heading, Input, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const SignUp = () => {
  return (
<Container maxW={'container.xl'} h={'100vh'} p={'16'}>

<form>
    <VStack alignItems={'stretch'}
     spacing={'8'}
      w={['full','96']}
       m={'auto'}
        my={'16'}>
        <Heading textAlign={'center'}>
           Video hub
        </Heading>
        <Avatar alignSelf={'center'} boxSize={'36'} />

<Input placeholder='Name' type={'text'} required 
focusBorderColor={'purple.500'} />

<Input placeholder='Email' type={'email'} required 
focusBorderColor={'purple.500'} />


<Input placeholder='Password' type={'password'} required 
focusBorderColor={'purple.500'} />



<Button colorScheme={'purple'} type={'submit'}>SignUp</Button>

    </VStack>
</form>

</Container>
  )
}

export default SignUp;
