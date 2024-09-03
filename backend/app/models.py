from pydantic import BaseModel

class TestCase(BaseModel):
    description: str
    pre_conditions: str
    testing_steps: str
    expected_result: str
