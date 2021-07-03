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
  Input,
  theme,
  VStack,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Select,
  HStack,
} from '@chakra-ui/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChevronDownIcon } from '@chakra-ui/icons';

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
]
function StatBody() {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Tweet</Th>
          <Th>Emotion</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Pùn</Td>
          <Td>🥲</Td>
        </Tr>
        <Tr>
          <Td>Rất zui</Td>
          <Td>🤣</Td>
        </Tr>
        <Tr>
          <Td>Thiên thần</Td>
          <Td>😇</Td>
        </Tr>
      </Tbody>
    </Table>
  )
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
      <Button colorScheme="teal" variant="solid" onClick={onOpen}>
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

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Grid
        h="100vh"
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(8, 1fr)"
        gap={4}
      >
        <GridItem colSpan={2} rowSpan={2}>
          <Center my={20} mx={10} flexDirection="column">
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
        <GridItem colSpan={6} rowSpan={3}>
          <VStack my={20} mx={10} spacing={4}>
            <Stack direction="row" w="100%">
              <Input placeholder="Input the sentence" />
              <Button colorScheme="teal" variant="solid">Predict</Button>
            </Stack>
            <ResponsiveContainer width="100%" height={450}>
              <BarChart
                width={900}
                height={450}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="probability" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </VStack>
        </GridItem>
        <GridItem colSpan={8} rowSpan={2}>
          <Tabs align="end" variant="enclosed">
            <TabList>
              <Tab>Federated settings</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Center mx={20} my={10} p={10}>
                  <Box maxW="60%" templateColumns="repeat(2, 1fr)" gap={4} w="100%">
                    <HStack spacing={5}>
                      <Select placeholder="Model" size="lg">
                        <option value="StandAlone">StandAlone</option>
                        <option value="PerFedAvg">PerFedAvg</option>
                        <option value="HeteroFL">HeteroFL</option>
                        <option value="HetPerFedAvg">HetPerFedAvg</option>
                      </Select>
                      <RadioGroup defaultValue="1" w="200px">
                        <Stack spacing={2}>
                          <Radio value="1">
                            Load pretrained
                </Radio>
                          <Radio value="2">Scratch train</Radio>
                        </Stack>
                      </RadioGroup>
                    </HStack>

                  </Box>
                </Center>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
