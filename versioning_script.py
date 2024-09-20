import unittest
from versioning_script import incrementar_version

class TestVersioning(unittest.TestCase):
    def test_incrementar_version(self):
        self.assertEqual(incrementar_version("1.0.0", "PATCH"), "1.0.1")
        self.assertEqual(incrementar_version("1.0.0", "MINOR"), "1.1.0")
        self.assertEqual(incrementar_version("1.0.0", "MAJOR"), "2.0.0")

if __name__ == '__main__':
    unittest.main()
