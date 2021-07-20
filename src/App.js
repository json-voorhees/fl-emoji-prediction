import React from 'react';
import {
  Box,
  Center,
  ChakraProvider,
  Grid,
  GridItem,
  Stack,
  Button,
  RadioGroup,
  Heading,
  Radio,
  theme,
  VStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Select,
  HStack,
  Textarea,
  CheckboxGroup,
  Checkbox,
  FormControl,
  FormLabel,
  Tag,
} from '@chakra-ui/react';
import Settings from './Settings';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
  {
    name: '🐻',
    probability: 24,
  },
  {
    name: '😗',
    probability: 13,
  },
  {
    name: '😎',
    probability: 98,
  },
  {
    name: '👍',
    probability: 39,
  },
  {
    name: '👀',
    probability: 48,
  },
  {
    name: '😁',
    probability: 38,
  },
  {
    name: '🥲',
    probability: 43,
  },
  {
    name: '😉',
    probability: 44,
  },
  {
    name: '😛',
    probability: 11,
  },
  {
    name: '🤓',
    probability: 2,
  },
];
const exploreData = [
  {
    name: '🐻',
    count: 254,
  },
  {
    name: '😗',
    count: 213,
  },
  {
    name: '😎',
    count: 198,
  },
  {
    name: '👍',
    count: 639,
  },
  {
    name: '👀',
    count: 418,
  },
  {
    name: '😁',
    count: 328,
  },
  {
    name: '🥲',
    count: 543,
  },
  {
    name: '😉',
    count: 244,
  },
  {
    name: '😛',
    count: 111,
  },
  {
    name: '🤓',
    count: 2,
  },
  {
    name: '😋',
    count: 25,
  },
  {
    name: '😝',
    count: 22,
  },
  {
    name: '😕',
    count: 52,
  },
  {
    name: '😤',
    count: 42,
  },
  {
    name: '😡',
    count: 22,
  },
]
function StatBody() {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Tweet</Th>
          <Th isNumeric>Emoji</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Pùn</Td>
          <Td isNumeric>🥲</Td>
        </Tr>
        <Tr>
          <Td>Rất zui</Td>
          <Td isNumeric>🤣</Td>
        </Tr>
        <Tr>
          <Td>Thiên thần</Td>
          <Td isNumeric>😇</Td>
        </Tr>
      </Tbody>
    </Table>
  )
}
const applySettings = (dataType, algorithm) => {
  console.log("dataType", dataType)
  console.log("algorithm", algorithm)
}

let rgb2hex = (r, g, b) => "#" + [r, g, b].map(x => Math.round(x * 255).toString(16).padStart(2, 0)).join('');
let hsl2rgb = (h, s, l) => {
  let a = s * Math.min(l, 1 - l);
  let f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  return [f(0), f(8), f(4)];
}
let prob2hex = (prob) => {
  return rgb2hex(...hsl2rgb(203, 0.88, prob / 100))
}
function ExploreBody() {
  return (
    <BarChart
      width={500}
      height={450}
      data={exploreData}
      margin={{
        top: 5,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  )
}

function DataModal({ showModalButtonText, modalHeader, modalBody }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button colorScheme="twitter" variant="solid" onClick={onOpen}>
        {showModalButtonText}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalHeader}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{modalBody}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

function App({ apiUrl }) {
  if (!apiUrl) {
    return <h3>Please refresh and input the API Url</h3>
  }
  return (
    <ChakraProvider theme={theme}>
      <Grid
        h="100vh"
        templateRows="repeat(6, 1fr)"
        templateColumns="repeat(8, 1fr)"
        my={0}
        mx={40}
        gap={4}
        colorScheme="twitter"
      >
        <GridItem colSpan={8} rowSpan={1}>
          <Settings applySetting={applySettings} />
        </GridItem>
        <GridItem colSpan={2} rowSpan={5}>
          <Center my={10} mx={10} flexDirection="column">
            <Heading as="h4" size="md" marginBottom={3}>User list</Heading>
            <Box h="400px" w="100%" bg="white" overflowY="scroll" border="1px" borderRadius="2px" borderColor="gray.200">
              <RadioGroup defaultValue="1">
                <Stack w="100%" p={10} spacing={4}>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(x => <Radio value={x.toString()}>USER {x}</Radio>)}
                </Stack>
              </RadioGroup>
            </Box>
            <Stack direction="row" spacing={8} marginTop={3}>
              <DataModal showModalButtonText="Stats" modalHeader="Stats" modalBody={StatBody()} />
              <DataModal showModalButtonText="Explore" modalHeader="Explore" modalBody={ExploreBody()} />
            </Stack>
          </Center>
        </GridItem>
        <GridItem colSpan={6} rowSpan={5}>
          <VStack my={10} mx={10} spacing={10}>
            <VStack w="80%" alignItems="flex-end">
              <Textarea placeholder="What're you thinking?" />
              <Button colorScheme="twitter" variant="solid">Predict</Button>
            </VStack>
            <HStack alignItems="flex-start" paddingBottom={10}>
              {
                [{ word: "I", value: 90 }, { word: "love", value: 29 }, { word: "Java", value: 39 }, { word: "script", value: 9 }]
                  .map(({ word, value }) => (<Tag size="lg" variant="solid" backgroundColor={prob2hex(100 - value)}>
                    {word}
                  </Tag>))
              }
            </HStack>
            <ResponsiveContainer width="80%" height={450}>
              <BarChart
                width={900}
                height={450}
                data={data}
                margin={{
                  top: 5,
                  right: 5,
                  left: 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" label={{ value: 'Emojis', position: 'insideBottomRight', offset: -5 }} />
                <YAxis label={{ value: 'probability', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="probability" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </VStack>
        </GridItem>
      </Grid>
    </ChakraProvider >
  );
}

export default App;
