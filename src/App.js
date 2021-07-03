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
} from '@chakra-ui/react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
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
                  <Radio value="1">
                    USER 1
                </Radio>
                  <Radio value="2">USER 2</Radio>
                  <Radio value="3">USER 3</Radio>
                  <Radio value="4">USER 4</Radio>
                  <Radio value="5">USER 5</Radio>
                  <Radio value="6">USER 5</Radio>
                  <Radio value="7">USER 5</Radio>
                  <Radio value="8">USER 5</Radio>
                  <Radio value="9">USER 5</Radio>
                </Stack>
              </RadioGroup>
            </Box>
            <Stack direction="row" spacing={8} marginTop={3}>
              <Button colorScheme="teal" variant="solid">
                Stats
              </Button>
              <Button colorScheme="teal" variant="solid">
                Explore
              </Button>
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
                  <Grid maxW="50%" templateColumns="repeat(2, 1fr)" gap={4} w="100%">
                    <GridItem colSpan={1}>
                      <Center>
                        <Menu>
                          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            Model
  </MenuButton>
                          <MenuList>
                            <MenuItem>StandAlone</MenuItem>
                            <MenuItem>PerFedAvg</MenuItem>
                            <MenuItem>HeteroFL</MenuItem>
                            <MenuItem>HetPerFedAvg</MenuItem>
                          </MenuList>
                        </Menu>
                      </Center>
                    </GridItem>
                    <GridItem colSpan={1}>
                      <Center>
                        <RadioGroup defaultValue="1">
                          <Stack w="100%" p={10} spacing={4}>
                            <Radio value="1">
                              Load pretrained
                </Radio>
                            <Radio value="2">Scratch train</Radio>
                          </Stack>
                        </RadioGroup>
                      </Center>
                    </GridItem>
                  </Grid>
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
