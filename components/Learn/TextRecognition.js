import React, { useState, useEffect } from "react";
import { View, Text, Button, Image, Platform, Alert, ScrollView, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

const TextRecognition = () => {
	const [imageUris, setImageUris] = useState([]);
	const [ocrResults, setOcrResults] = useState([]);

	useEffect(() => {
		(async () => {
			const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
			if (status !== "granted") {
				Alert.alert("Permission Required", "Please grant access to your camera roll.", [{ text: "OK" }]);
			}
		})();
	}, []);

	const pickImage = async () => {
		let images = [];

		while (true) {
			let result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsEditing: true,
				aspect: [16, 9],
				quality: 1,
			});

			if (result.canceled) {
				break;
			}

			images.push(result.assets[0].uri);
		}

		if (images.length > 0) {
			setImageUris(images);
		}
	};

	const takePhoto = async () => {
		let result = await ImagePicker.launchCameraAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [16, 9],
			quality: 1,
		});

		if (!result.canceled) {
			setImageUris((prevUris) => [...prevUris, result.assets[0].uri]);
			const takeAnother = await askForAnotherPhoto();
			if (takeAnother) {
				takePhoto();
			}
		}
	};

	const askForAnotherPhoto = async () => {
		return new Promise((resolve) => {
			Alert.alert(
				"Take Another Photo?",
				"Do you want to take another photo?",
				[
					{ text: "No", onPress: () => resolve(false), style: "cancel" },
					{ text: "Yes", onPress: () => resolve(true) },
				],
				{ cancelable: false }
			);
		});
	};

	const analyzeImages = async () => {
		const results = [];
		for (const uri of imageUris) {
			const result = await analyzeImage(uri);
			results.push(result);
		}
		setOcrResults(results);
	};

	const analyzeImage = async (uri) => {
		try {
			const imageBase64 = await FileSystem.readAsStringAsync(uri, {
				encoding: FileSystem.EncodingType.Base64,
			});

			const apiKey = "nAIzaSyCjjcP6p0CMtszmsZErlrCKzYbKLGF9Bxc";
			const apiEndpoint = "https://vision.googleapis.com/v1/images:annotate?key=" + apiKey;

			const requestData = {
				requests: [
					{
						image: {
							content: imageBase64,
						},
						features: [{ type: "DOCUMENT_TEXT_DETECTION" }],
					},
				],
			};

			const response = await fetch(apiEndpoint, {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(requestData),
			});

			const data = await response.json();

			const fullTextAnnotation = data.responses[0].fullTextAnnotation;
			return fullTextAnnotation ? fullTextAnnotation.text : "No text detected";
		} catch (error) {
			console.error("Error analyzing the image:", error);
			return "Error analyzing the image: " + error.message;
		}
	};

	return (
		<ScrollView style={styles.container}>
			<Button title="Pick Images" onPress={pickImage} style={styles.button} />
			<Button title="Take Photo" onPress={takePhoto} style={styles.button} />
			<View style={styles.imageContainer}>
				{imageUris.map((uri, index) => (
					<Image key={index} source={{ uri: uri }} style={styles.image} />
				))}
			</View>
			<Button title="Analyze Images" onPress={analyzeImages} style={styles.button} />
			<View style={styles.resultsContainer}>
				{ocrResults.map((result, index) => (
					<Text key={index} style={styles.resultText}>
						{result}
					</Text>
				))}
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	button: {
		marginBottom: 10,
	},
	imageContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
		marginBottom: 0,
	},
	image: {
		width: 150,
		height: 150,
		margin: 5,
	},
	resultsContainer: {
		marginBottom: 20,
	},
	resultText: {
		marginBottom: 10,
		fontSize: 16,
	},
});

export default TextRecognition;
