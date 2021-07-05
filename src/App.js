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
  Textarea,
  CheckboxGroup,
  Checkbox,
  FormControl,
  FormLabel,
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

function App() {
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
          <Center mx={10} my={10} p={5}>
            <Box>
              <HStack spacing={20}>
                <FormControl id="algorithm">
                  <FormLabel>Algorithm</FormLabel>
                  <Select>
                    <option value="StandAlone">StandAlone</option>
                    <option value="PerFedAvg">PerFedAvg</option>
                    <option value="HeteroFL">HeteroFL</option>
                    <option value="HetPerFedAvg">HetPerFedAvg</option>
                  </Select>
                </FormControl>
                <FormControl id="technique">
                  <FormLabel>Techniques</FormLabel>
                  <CheckboxGroup size="lg" colorScheme="twitter" defaultValue={["masking", "adaptEval"]}>
                    <HStack spacing={5} whiteSpace="nowrap">
                      <Checkbox value="masking">Masking</Checkbox>
                      <Checkbox value="adaptEval">Adapt Eval</Checkbox>
                    </HStack>
                  </CheckboxGroup>
                </FormControl>
                <FormControl id="weighting">
                  <FormLabel>Weighting</FormLabel>
                  <Select>
                    <option value="inverseWeighting">Uniform Weighting</option>
                    <option value="inverseWeighting">Inverse Weighting</option>
                    <option value="smoothInverseWeighting">Smooth Inverse Weighting</option>
                    <option value="effectiveNumber">Effecitive Number</option>
                  </Select>
                </FormControl>
              </HStack>
            </Box>
          </Center>
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
          <VStack my={10} mx={10} spacing={20}>
            <VStack w="80%" alignItems="flex-end">
              <Textarea placeholder="What're you thinking?" />
              <Button colorScheme="twitter" variant="solid">Predict</Button>
            </VStack>
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
