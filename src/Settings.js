import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Center, HStack } from '@chakra-ui/layout';
import { Select } from '@chakra-ui/select';
import React, { useState } from 'react';

function Settings({applySetting}) {
	const [dataType, setDataType] = useState("IID")
	const [algorithm, setAlgorithm] = useState("Centralized")
	return (
		<Center mx={10} my={10} p={5} borderBottom="1px solid">
			<HStack spacing={20}>
				<HStack spacing={10}>
					<FormControl id="dataType">
						<FormLabel>Data Type</FormLabel>
						<Select onChange={(event) => setDataType(event.target.value)}>
							<option value="IID">IID</option>
							<option value="NonIID">NonIID</option>
							<option value="Centralized">Centralized</option>
						</Select>
					</FormControl>
					<FormControl id="algorithm">
						<FormLabel>Algorithm</FormLabel>
						<Select onChange={(event) => setAlgorithm(event.target.value)}>
							<option value="Centralized">Centralized</option>
							<option value="HetFedAvg">Het-FedAvg</option>
							<option value="HetPerFedAvg">HetPer-FedAvg</option>
						</Select>
					</FormControl>
				</HStack>
				<FormControl id="apply" w="unset">
					<FormLabel opacity={0}>{"lb"}</FormLabel>
					<Button colorScheme="twitter" onClick={()=>applySetting(dataType,algorithm)}>Apply</Button>
				</FormControl>
			</HStack>
		</Center>
	)
}

export default Settings;
