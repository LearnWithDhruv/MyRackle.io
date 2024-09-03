import os
import openai
from openai.error import AuthenticationError

from dotenv import load_dotenv

load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")

def generate_test_cases(images, context):
    print("Received images:", len(images))
    print("Context:", context)

    try:
        prompt = f"Generate detailed test cases for the following app features based on these screenshots. Context: {context if context else 'No additional context provided'}."

        response = openai.Completion.create(
            model="gpt-3.5-turbo",
            prompt=prompt,
            max_tokens=500
        )

        test_cases = response.choices[0].text.strip()

        print("Generated test cases:", test_cases)

        return {
            "description": "Generated Test Cases",
            "test_cases": test_cases
        }

    except AuthenticationError as e:
        print("Authentication failed. Please check your OpenAI API key.")
        return {"error": "Authentication failed. Please check your OpenAI API key."}

    except Exception as e:
        print(f"An error occurred: {str(e)}")
        return {"error": f"An error occurred: {str(e)}"}
