import { Button } from '@/components/ui/button';
import {
  Download,
  Upload,
  Trash2,
  Edit,
  CheckCircle,
  Save,
  Play,
  Plus,
  ArrowRight,
  Send,
} from 'lucide-react';

export default function ButtonExamples() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold">Buttons with Icons</h2>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Default Buttons with Icons</h3>
        <div className="flex flex-wrap gap-4">
          <Button icon={Plus}>Add New</Button>
          <Button icon={Download}>Download</Button>
          <Button icon={Save}>Save</Button>
          <Button icon={Send}>Send</Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Icon Position</h3>
        <div className="flex flex-wrap gap-4">
          <Button icon={ArrowRight} iconPosition="right">
            Continue
          </Button>
          <Button icon={Upload} iconPosition="right">
            Upload
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Button Variants with Icons</h3>
        <div className="flex flex-wrap gap-4">
          <Button icon={Plus} variant="default">
            Add
          </Button>
          <Button icon={Edit} variant="secondary">
            Edit
          </Button>
          <Button icon={Trash2} variant="destructive">
            Delete
          </Button>
          <Button icon={CheckCircle} variant="outline">
            Approve
          </Button>
          <Button icon={Play} variant="ghost">
            Play
          </Button>
          <Button icon={Download} variant="link">
            Download
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Button Sizes with Icons</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <Button icon={Plus} size="sm">
            Small
          </Button>
          <Button icon={Plus}>Default</Button>
          <Button icon={Plus} size="lg">
            Large
          </Button>
          <Button icon={Plus} size="icon" aria-label="Add"></Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Disabled Buttons with Icons</h3>
        <div className="flex flex-wrap gap-4">
          <Button icon={Download} disabled>
            Download
          </Button>
          <Button icon={Save} variant="secondary" disabled>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
