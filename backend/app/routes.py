from fastapi import APIRouter, UploadFile, File, Form
from typing import List
from app.llm_integration import generate_test_cases

router = APIRouter()

@router.post("/api/describe")
async def describe_testing_instructions(
    images: List[UploadFile] = File(...),
    context: str = Form(None)
):
    image_data = [await image.read() for image in images]
    test_cases = generate_test_cases(image_data, context)
    print("Test cases:", test_cases)
    return {"test_cases": test_cases}
